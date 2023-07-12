export default function fetchData(url) {
  const id = +url.slice(20);
  try {
    if (id === 12) {
      return { status: 'ok', level: 80 };
    }
    throw new Error('Mock this!');
  } catch (error) {
    return error.message;
  }
}
