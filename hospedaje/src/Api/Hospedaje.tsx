const fetchUsers = async () => {
    const response = await fetch('https://localhost:7288/api/Hospedajes/');
    if (!response.ok) {
        throw new Error('La respuesta de la red no estuvo bien');
    }
    return response.json();
};

export { fetchUsers };