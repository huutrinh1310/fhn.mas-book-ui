export default function useAuth() {
  return {
    user: {
      name: "John Doe",
      email: "huutrinh@gmai.com",
      avatar: "https://i.pravatar.cc/300",
    },
    isAuthenticated: true,
    isLoading: false,
    logIn: () => {},
    register: () => {},
    logOut: () => {},
  };
}
