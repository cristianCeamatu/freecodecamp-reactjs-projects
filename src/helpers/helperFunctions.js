export const intToMMSS = (integer) => {
	let minutes = Math.floor(integer / 60)
	let seconds = integer - (minutes * 60)
	minutes = (minutes < 10) ? '0' + minutes.toString() : minutes
	seconds = (seconds < 10) ? '0' + seconds.toString() : seconds
	return `${minutes}:${seconds}`
}

export const getJSON = (url) => new Promise((resolves, rejects) => {
	const request = new XMLHttpRequest()
	request.open('GET', url)
	request.onload = () => (request.status === 200) ?
								resolves(JSON.parse(request.response))
								:
								rejects(Error(request.statusText))
	request.onerror = err => rejects(err)
	request.send()
})