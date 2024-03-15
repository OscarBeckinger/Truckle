export const useGetUserInfo = () => {
    const { name, profilePhoto, userID, isAuth, email, creationDate } = JSON.parse(localStorage.getItem("auth"));
    return { name, profilePhoto, userID, isAuth, email, creationDate };
};