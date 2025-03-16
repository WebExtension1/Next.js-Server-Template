export default function withAuth<T extends object>(
    WrappedComponent: React.ComponentType<T>
) {
    return function ProtectedRoute(props: T) {
        return <WrappedComponent {...props} />;
    };
}