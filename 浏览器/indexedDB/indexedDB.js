function openDB(dbName, version = 1) {
	return new Promise((resolve, reject) => {
		let db
		const request = indexedDB.open(dbName, version)

		request.onsuccess = (e) => {
			db = e.target.result
			console.log('DB OPEN SECCESS')
			resolve(db)
		}

		request.onerror = () => {
			console.log('DB OPEN ERROR')
		}

		request.onupgradeneeded = (e) => {
			db = e.target.result
			console.log('DB UPDATE')

			// 创建数据仓库（表）
			const objectStore = db.createObjectStore('student', {
				keyPath: 'studentId',
				autoIncrement: true
			})
			// 创建索引
			objectStore.createIndex('studentId', 'studentId', { unique: true })
			objectStore.createIndex('studentName', 'studentName', { unique: false })
			objectStore.createIndex('studentAge', 'studentAge', { unique: false })
		}
	})
}

function addData(dbName, storeName, data) {
	const request = dbName.transaction([storeName], 'readwrite').objectStore(storeName).add(data)
	request.onsuccess = () => {
		console.log('WRITE SUCCESS')
	}
	request.onerror = () => {
		console.log('WRITE ERROR')
	}
}

function getDataByKey(dbName, storeName, key) {
	return new Promise((resolve, reject) => {
		const request = dbName.transaction([storeName]).objectStore(storeName).get(key)
		request.onsuccess = () => {
			resolve(request.result)
			console.log('GET DATA SUCCESS')
		}
		request.onerror = () => {
			console.log('GET DATA ERROR')
		}
	})
}

function getAllData(dbName, storeName) {
	return new Promise((resolve, reject) => {
		const request = dbName.transaction([storeName]).objectStore(storeName).getAll()
		request.onsuccess = () => {
			resolve(request.result)
			console.log('GET ALL DATA SUCCESS')
		}
		request.onerror = () => {
			console.log('GET ALL DATA ERROR')
		}
	})
}

function closeDB(dbName) {
	dbName.close()
	console.log('CLOSE DB')
}

function deleteDB(dbName) {
	console.log(dbName)
	let deleteRequest = window.indexedDB.deleteDatabase(dbName)
	deleteRequest.onerror = () => {
		console.log('DELETE ERROR')
	}
	deleteRequest.onsuccess = () => {
		console.log('DELETE SUCCESS')
	}
}

function cursorGetData(dbName, storeName) {
	return new Promise((resolve, reject) => {
		const list = []
		const request = dbName.transaction([storeName], 'readwrite').objectStore(storeName).openCursor()

		request.onsuccess = (e) => {
			const cursor = e.target.result
			if (cursor) {
				list.push(cursor.value)
				cursor.continue()
			} else {
				resolve(list)
			}
		}
	})
}

function getDataByIndex(dbName, storeName, indexName, indexValue) {
	const list = []
	return new Promise((resolve, reject) => {
		const request = dbName.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.index(indexName)
			.openCursor(IDBKeyRange.only(indexValue))

		request.onsuccess = (e) => {
			const cursor = e.target.result
			if (cursor) {
				list.push(cursor.value)
				cursor.continue()
			} else {
				resolve(list)
			}
		}
	})
}

function cursorGetDataByIndexAndPage(
	dbName,
	storeName,
	indexName,
	indexValue,
	page,
	pageSize
) {
	return new Promise((resolve, reject) => {
		const list = []
		let counter = 0
		let isPass = true
		const request = dbName.transaction([storeName], 'readwrite')
			.objectStore(storeName)
			.openCursor()

		request.onsuccess = (e) => {
			const cursor = e.target.result

			if (page > 1 && isPass) {
				isPass = false
				cursor.advance((page - 1) * pageSize)
				return
			}

			if (cursor) {
				list.push(cursor.value)
				counter++
				if (counter < pageSize) {
					cursor.continue()
				} else {
					// cursor = null
					resolve(list)
				}
			} else {
				resolve(list)
			}
		}
	})
}

openDB('studentDB').then(db => {
	// addData(db, 'student', { 'studentId': 1, studentName: 'Qihao', studentAge: 22 })
	// addData(db, 'student', { 'studentId': 2, studentName: 'Joe', studentAge: 20 })
	// addData(db, 'student', { 'studentId': 3, studentName: 'Zhang', studentAge: 15 })
	// addData(db, 'student', { 'studentId': 4, studentName: 'Wei', studentAge: 17 })
	// addData(db, 'student', { 'studentId': 5, studentName: 'Qiao', studentAge: 19 })
	// addData(db, 'student', { 'studentId': 6, studentName: 'Ting', studentAge: 23 })
	// addData(db, 'student', { 'studentId': 7, studentName: 'Hao', studentAge: 19 })
	// addData(db, 'student', { 'studentId': 8, studentName: 'Loser', studentAge: 22 })
	// addData(db, 'student', { 'studentId': 9, studentName: 'Jovee', studentAge: 24 })
	// addData(db, 'student', { 'studentId': 10, studentName: 'Breeno', studentAge: 18 })
	// addData(db, 'student', { 'studentId': 11, studentName: 'Jie', studentAge: 27 })
	// addData(db, 'student', { 'studentId': 12, studentName: 'Xi', studentAge: 20 })
	// getAllData(db, 'student').then(data => console.log(data))
	// cursorGetData(db, 'student').then(data => console.log(data))
	// getDataByIndex(db, 'student', 'studentAge', 20).then(data => console.log(data))
	cursorGetDataByIndexAndPage(db, 'student', '', '', 2, 5).then(data => console.log(data))
})

