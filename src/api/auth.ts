import { useAuthStore } from '@/store/authStore';

export async function setUser(username: string, password: string) {
  return new Promise<{ name: string; token: string }>((resolve, reject) => {
    setTimeout(() => {
      if (username === 'admin' && password === '1234') {
        resolve({ name: 'Admin User', token: 'fake-jwt' });
      } else {
        reject(new Error('Неверные данные'));
      }
    }, 1000);
  });
}

export async function login(username: string, password: string) {
  const store = useAuthStore.getState();
  store.setLoading(true);

  try {
    const user = await setUser(username, password);
    store.login(user);
  } catch (error) {
    throw error;
  } finally {
    store.setLoading(false);
  }
}
