export function redirectToLogin() {
    window.location.href = `/login?from=${btoa(window.location.pathname + window.location.search)}`;
  }