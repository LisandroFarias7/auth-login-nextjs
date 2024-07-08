const AuthLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return <div className="grid palce-items-center min-h-1">{children}</div>
};

export default AuthLayout;