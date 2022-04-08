export const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

// eslint-disable-next-line default-param-last
async function getData(url = '', method = METHODS.GET, data) {
  const response = await fetch(url, {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  }).then((res) => res);
  return response.json();
}

export const getBoards = () => getData('/api/boards');
export const getBoardById = (id) => getData(`/api/board/${id}`);
export const addBoard = (data) => getData('/api/boards', METHODS.POST, data);
export const addBoardCard = (id, data) => getData(`/api/board/${id}`, METHODS.POST, data);
export const addBoardCardItem = (id, data) => getData(`/api/board/${id}`, METHODS.POST, data);
