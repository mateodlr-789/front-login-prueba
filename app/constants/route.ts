interface Route {
    login: string
    register: string
    principal: string
    solicitud: string
    nuevaSolicitud: string
}

export const route: Route = {
    login: '/login',
    register: '/register',
    principal: '/principal',
    solicitud: '/solicitud',
    nuevaSolicitud: '/solicitud/create'
}

export const protectedRoutes = [
    route.principal,
    route.solicitud,
    route.nuevaSolicitud
]