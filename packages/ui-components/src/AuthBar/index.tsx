interface ComponentProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  name?: string;
  onLogin: () => void;
  onSignup: () => void;
  onLogout: () => void;
}

function AuthenticatedContent({ name, onLogout }: ComponentProps): JSX.Element {
  return (
    <>
      <span>Hi, {name || "friend"}</span>
      &nbsp;
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </>
  );
}

function UnauthenticatedContent({
  onLogin,
  onSignup,
}: ComponentProps): JSX.Element {
  return (
    <>
      <button type="button" onClick={onLogin}>
        Log in
      </button>
      &nbsp;or&nbsp;
      <button type="button" onClick={onSignup}>
        Sign up
      </button>
    </>
  );
}

export function AuthBar(props: ComponentProps): JSX.Element {
  const { isAuthenticated, isLoading } = props;

  const content = isAuthenticated ? (
    <AuthenticatedContent {...props} />
  ) : (
    <UnauthenticatedContent {...props} />
  );

  return (
    <nav>
      {isLoading ? <span>Loading...</span> : null}
      {!isLoading ? content : null}
    </nav>
  );
}
