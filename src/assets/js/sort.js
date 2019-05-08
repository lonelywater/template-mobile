/*--常用排序算法，用来进行排序操作--*/

/* 
 * 作者：水滴
 * 函数名称：bubbleSort
 * 函数功能：冒泡排序，能够排序一层数组和数组json
 * 入参：入参1 - data，排序数据    
 * 	         入参2 - direction，排序方向，默认为bigger，从小到大，另一个值为smaller，
 * 	         入参3 - name，如果需排序为json数组，则传入比较值的名字
 * 出参：无
 * 
 * */
function bubbleSort(data, direction = "bigger", name) {
	var len = data.length;

	if(name == undefined && direction == "bigger") {
		for(let i = 0; i < len - 1; i++) {
			for(let j = 0; j < len - 1 - i; j++) {
				if(data[j] > data[j + 1]) {
					let item = data[j];
					data[j] = data[j + 1];
					data[j + 1] = item;
				}
			}
		}
		return data;
	}
	if(name == undefined && direction != "bigger") {
		for(let i = 0; i < len - 1; i++) {
			for(let j = 0; j < len - 1 - i; j++) {
				if(data[j] < data[j + 1]) {
					let item = data[j];
					data[j] = data[j + 1];
					data[j + 1] = item;
				}
			}
		}
		return data;
	}
	if(name != undefined && direction == "bigger") {
		for(let i = 0; i < len - 1; i++) {
			for(let j = 0; j < len - 1 - i; j++) {
				if(data[j][name] > data[j + 1][name]) {
					let item = data[j];
					data[j] = data[j + 1];
					data[j + 1] = item;
				}
			}
		}
		return JSON.parse(JSON.stringify(data));
		//return data;
	}
	if(name != undefined && direction != "bigger") {
		for(let i = 0; i < len - 1; i++) {
			for(let j = 0; j < len - 1 - i; j++) {
				if(data[j][name] < data[j + 1][name]) {
					let item = data[j];
					data[j] = data[j + 1];
					data[j + 1] = item;
				}
			}
		}
		return JSON.parse(JSON.stringify(data));
	}
}

/* 
 * 作者：水滴
 * 函数名称：selectSort
 * 函数功能：选择排序，能够排序一层数组和数组json
 * 入参：入参1 - data，排序数据    
 * 	         入参2 - direction，排序方向，默认为bigger，从小到大，另一个值为smaller，
 * 	         入参3 - name，如果需排序为json数组，则传入比较值的名字
 * 出参：无
 * 
 * */
function selectSort(data, direction = "bigger", name) {
	let len = data.length,
		selectIndex;

	if(name == undefined && direction == "bigger") {
		for(let i = 0; i < len - 1; i++) {
			selectIndex = i;
			for(let j = i + 1; j < len; j++) {
				if(data[selectIndex] > data[j]) {
					selectIndex = j;
				}
			}
			let item = data[i];
			data[i] = data[selectIndex];
			data[selectIndex] = item;
		}
		return data;
	}
	if(name == undefined && direction != "bigger") {
		for(let i = 0; i < len - 1; i++) {
			selectIndex = i;
			for(let j = i + 1; j < len; j++) {
				if(data[selectIndex] < data[j]) {
					selectIndex = j;
				}
			}
			let item = data[i];
			data[i] = data[selectIndex];
			data[selectIndex] = item;
		}
		return data;
	}
	if(name != undefined && direction == "bigger") {
		for(let i = 0; i < len - 1; i++) {
			selectIndex = i;
			for(let j = i + 1; j < len; j++) {
				if(data[selectIndex][name] > data[j][name]) {
					selectIndex = j;
				}
			}
			let item = data[i];
			data[i] = data[selectIndex];
			data[selectIndex] = item;
		}
		return JSON.parse(JSON.stringify(data));
	}
	if(name != undefined && direction != "bigger") {
		for(let i = 0; i < len - 1; i++) {
			selectIndex = i;
			for(let j = i + 1; j < len; j++) {
				if(data[selectIndex][name] < data[j][name]) {
					selectIndex = j;
				}
			}
			let item = data[i];
			data[i] = data[selectIndex];
			data[selectIndex] = item;
		}
		return JSON.parse(JSON.stringify(data));
	}
}

export {
	bubbleSort,
	selectSort,
}
