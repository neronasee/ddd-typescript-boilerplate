export const TYPES = {
    // TODO: no needed types
    AppRouter: Symbol('AppRouter'),
    Server: Symbol('Server'),

    /** middlewares */
    Middleware: 'Middleware',
    /** controllers */
    HttpController: 'HttpController',
    /** controller http methods */
    ControllerHttpMethod: 'ControllerHttpMethod',
    /** repositories */
    UserRepository: Symbol('UserRepository'),
    /** use cases */
    CreateNewUserUseCase: Symbol('CreateNewUserUseCase'),
};
