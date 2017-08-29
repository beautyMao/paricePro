window.add = function (num) {
	return num+1;
}

const libs = (() =>{
	function add(num){
		return num+1;
	}
	return {
		add
	}
})()

export default libs;