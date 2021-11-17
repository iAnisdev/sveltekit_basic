import { sequence } from '@sveltejs/kit/hooks'


async function first({request , resolve}) {
        const response = await resolve(request)
        return {
            headers:{
                ...response.headers,
                'sequence': Date.now()
            },
            ...response
        }
    }

    async function second({request , resolve}) {
        const response = await resolve(request)
        return {
            headers:{
                ...response.headers,
                'refrence': Date.now()
            },
            ...response
        }
    }

export const handle = sequence(first , second)


export async function getSession(request) {

    return {
        user: {
            id: 1,
            name: 'anis',
            email:'anis@live.cn'
        }
    }
}

export async function handleError({error , request}) {
    console.log("error " , error)
    console.log("request " , request)
}