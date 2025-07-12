import { useAuthStore } from "@/store/authStore"

export async function setUser(username: string, password: string) {
  return new Promise<{ name: string; token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        resolve({ name: 'Admin User', token: 'fake-jwt-token-123' })
      } else {
        reject(new Error('Неверные данные'))
      }
    }, 1000)
  })
}

export async function login(username: string, password: string) {
  const user = await setUser(username, password)
  useAuthStore.getState().login(user)
}