export const getData = async () => {
    const data = await fetch('http://localhost:3333/api/list')

    return data.json()
}

export const getDetail = async (id: string) => {
    const data = await fetch('http://localhost:3333/api/detail/' + id)

    return data.json()
}