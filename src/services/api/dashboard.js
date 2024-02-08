import instance from "./auth";

export const requestAllDashboards = async () => {
    const { data } = await instance.get('dashboard');
    return data;
}; 

export const requestAddDashboard = async (values) => {
    const { data } = await instance.post('dashboard', values);
    return data;
};

export const requestDashboardById = async (dashboardId) => {
    const { data } = await instance.get(`dashboard/${dashboardId}`);
    return data;
};

export const requestEditDashboard = async (dashboardId, values) => {
    const { data } = await instance.put(`dashboard/${dashboardId}`, values);
    return data;
};

export const requestDeleteDashboard = async (dashboardId) => {
    const { data } = await instance.delete(`dashboard/${dashboardId}`);
    return data;
};

export const requestAddColumn = async (dashboardId, title, owner) => {
    const { data } = await instance.post(`column/${dashboardId}`, {title, owner});
    return data;
};

export const requestDeleteColumn = async (columnId) => {
    const { data } = await instance.delete(`column/${columnId}`);
    return data;
};

export const requestUpdateColumn = async ({ columnId, title }) => {
    const { data } = await instance.put(`column/${columnId}`, title);
    return data;
}