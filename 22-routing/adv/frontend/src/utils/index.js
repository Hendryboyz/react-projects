export const dateFormater = new Intl.DateTimeFormat("zh-TW", {
  dateStyle: 'full',
  timeStyle: 'long',
});

export async function loadEvents() {
  const resourceUrl = 'http://localhost:8080/events';
  const responseData = await fetchContents(resourceUrl, 'fail to fetch events');
  return responseData.events;
}

export const fetchContents = async (resourceUrl, errorMessage) => {
  try {
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      // use `defer()` require to parse json manually
      return await resp.json();
    } else {
      throw Response.json({message: errorMessage}, { status: 500 })
    }
  } catch (e) {
    console.error(e);
    throw Response.json({message: errorMessage}, { status: 500 })
  }
}