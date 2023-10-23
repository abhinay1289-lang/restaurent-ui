export function redirectToLogin() {
    window.location.href = `/login?from=${btoa(window.location.pathname + window.location.search)}`;
  }

  export function getInitials(userObj: any) {
    let initials = '';
    if (userObj.firstName) {
      initials += userObj.firstName[0].toUpperCase();
    }
    if (userObj.lastName) {
      initials += userObj.lastName[0].toUpperCase();
    }
    return initials;
  }

  export interface BreadCrumbConfig {
    label: string;
    link: string;
  }