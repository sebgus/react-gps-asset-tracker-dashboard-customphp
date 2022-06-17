export async function fetchMYSQLdata() {


  const baseUrl = `http://192.168.50.97/webhook/mysql_json.php`;

  const res = await fetch(baseUrl, {});
  const eventData = await res.json();

  return eventData.reverse();
}
