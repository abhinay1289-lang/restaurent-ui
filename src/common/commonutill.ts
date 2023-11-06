export function redirectToLogin() {
    window.location.href = `/login?from=${btoa(window.location.pathname + window.location.search)}`;
  }
  export function toUpperFirstChar(str: string): string {
    return str && str[0].toUpperCase() + str.slice(1).toLowerCase();
  }

  export function getRole(user: any) {
    return user.roles
      .map((role: any) => toUpperFirstChar(role.name))
      .join(', ');
  }

  export function getInitials(userObj: any) {
    console.log('user',userObj)
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