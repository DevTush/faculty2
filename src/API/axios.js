import axios from "axios";

const instance = axios.create({
  baseURL: "http://acharya-placement-dev.herokuapp.com/api/",
  headers: {
    Authorization:
      "Bearer " +
      "eyJhbGciOiJSUzI1NiIsImtpZCI6ImYyNGYzMTQ4MTk3ZWNlYTUyOTE3YzNmMTgzOGFiNWQ0ODg3ZWEwNzYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWRtaW4xIiwicm9sZXMiOlsiYWRtaW4iXSwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL3BsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1ZCI6InBsYWNlbWVudC1zeXN0ZW0tYWNoYXJ5YSIsImF1dGhfdGltZSI6MTY0NDMxNDI1NiwidXNlcl9pZCI6IlFtQ0VZdUpXUm1lN3BFcVM1TThkaU83MzZsYzIiLCJzdWIiOiJRbUNFWXVKV1JtZTdwRXFTNU04ZGlPNzM2bGMyIiwiaWF0IjoxNjQ0MzE0MjU2LCJleHAiOjE2NDQzMTc4NTYsImVtYWlsIjoiYWRtaW4xQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImFkbWluMUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.XVdljukPB7qJBCM8oE7XdpoDAruX3opCpzZvmI4jgm-oSbFanbw47tFwRoRSzTb-ujZPv5QZ7FcuK4KTkfuIYAf2cTDQ2LfwQayQD2fUzxcoJTV4KFPa9qiItr_eYVSSNBzrIGzQ27B5WYoQKKdDZhfChNj5zwYawKNSBWJfnwWt9c6eegt7F12YhIAagmsAnVNW1SFSSIq51HD5KS96c871gJAwhRj569NsLuU3fdo5DxZv63X7zJ6fn_OOnFJPa5uR5Yw2kHOEVfYLRZxsjGpxT8Ce1C4paHDhRaFZb7IvSug3PZZUh4PvgnDW6eVn3RXTXJ42bkZ7Kwyj0LmM5w",
  },
});

export default instance;
