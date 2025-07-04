export const dateFormater = new Intl.DateTimeFormat("zh-TW", {
  dateStyle: 'full',
  timeStyle: 'long',
});

export const fetchContents = async (resourceUrl) => {
  try {
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      return resp;
    } else {
      throw Response.json({message: 'failed to fetch events'}, { status: 500 })
    }
  } catch (e) {
    console.error(e);
    throw Response.json({message: 'failed to fetch events'}, { status: 500 })
  }
}