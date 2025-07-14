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
