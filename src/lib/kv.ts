// Vercel KV / Upstash Redis REST API İstemcisi
// Dış paket gerektirmez, sıfır bağımlılıkla yerel fetch kullanır.

const getKvUrl = () => {
  return (
    process.env.KV_REST_API_URL ||
    process.env.UPSTASH_REDIS_REST_URL ||
    ''
  ).trim();
};

const getKvToken = () => {
  return (
    process.env.KV_REST_API_TOKEN ||
    process.env.UPSTASH_REDIS_REST_TOKEN ||
    ''
  ).trim();
};

export const isKvConfigured = (): boolean => {
  const url = getKvUrl();
  const token = getKvToken();
  return Boolean(url && token);
};

export async function kvGet<T>(key: string): Promise<T | null> {
  const url = getKvUrl();
  const token = getKvToken();
  if (!url || !token) return null;

  try {
    const endpoint = `${url.replace(/\/$/, '')}/get/${encodeURIComponent(key)}`;
    const res = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`[KV] GET ${key} başarısız: HTTP ${res.status}`);
      return null;
    }

    const data = await res.json();
    if (!data || data.result === null || data.result === undefined) {
      return null;
    }

    // Upstash string veya doğrudan nesne döndürebilir
    if (typeof data.result === 'object') {
      return data.result as T;
    }

    if (typeof data.result === 'string') {
      try {
        return JSON.parse(data.result) as T;
      } catch {
        return data.result as unknown as T;
      }
    }

    return data.result as T;
  } catch (error) {
    console.error(`[KV] GET ${key} hatası:`, error);
    return null;
  }
}

export async function kvSet<T>(key: string, value: T): Promise<boolean> {
  const url = getKvUrl();
  const token = getKvToken();
  if (!url || !token) return false;

  try {
    const endpoint = `${url.replace(/\/$/, '')}/set/${encodeURIComponent(key)}`;
    const payloadString = typeof value === 'string' ? value : JSON.stringify(value);

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: payloadString,
      cache: 'no-store',
    });

    if (!res.ok) {
      console.warn(`[KV] SET ${key} başarısız: HTTP ${res.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error(`[KV] SET ${key} hatası:`, error);
    return false;
  }
}

export async function kvDel(key: string): Promise<boolean> {
  const url = getKvUrl();
  const token = getKvToken();
  if (!url || !token) return false;

  try {
    const endpoint = `${url.replace(/\/$/, '')}/del/${encodeURIComponent(key)}`;
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    });

    return res.ok;
  } catch (error) {
    console.error(`[KV] DEL ${key} hatası:`, error);
    return false;
  }
}
