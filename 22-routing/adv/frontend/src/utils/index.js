export const dateFormater = new Intl.DateTimeFormat("zh-TW", {
  dateStyle: 'full',
  timeStyle: 'long',
});

export const fetchContents = async (resourceUrl, errorMessage) => {
  try {
    const resp = await fetch(resourceUrl, {
      method: 'GET',
    });
    if (resp.ok) {
      // use `defer()` require to parse json manually
      const json = await resp.json();
      return json.events;
    } else {
      throw Response.json({message: errorMessage}, { status: 500 })
    }
  } catch (e) {
    console.error(e);
    throw Response.json({message: errorMessage}, { status: 500 })
  }
}