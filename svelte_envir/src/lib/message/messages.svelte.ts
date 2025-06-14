class Messages {
	list = $state([])

	addMsg(item) {
		const id = crypto.randomUUID()
		const defaults = {
			id,
			type: 'info',
			dismissible: true,
			timeout: 3000
		}
		const obj = { ...defaults, ...item }
		this.list.push(obj)
		if (item.timeout) {
			console.log('ITEMTIM')
			setTimeout(() => this.dismiss(id), item.timeout)
		}
	}
	dismiss(id) {
		this.list = this.list.filter((t) => t.id !== id)
	}
}

export const msg = new Messages()
