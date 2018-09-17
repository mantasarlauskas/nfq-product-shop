export const required = value => value !== undefined && value !== "" ? undefined : "Laukelis negali būti tuščias";
const maxLength = max => value => value && value.length > max ? `Laukelis negali viršyti ${max} simbolių` : undefined;
export const maxLength250 = maxLength(250), maxLength30 = maxLength(30);