import { redirect } from 'react-router-dom';
import { getCookie } from 'typescript-cookie';
import { getPIBOData } from '../pibo';
import { getMatchForCategory } from '../credit';

const rowData = {
  id: '0',
  piboId: '0',
  companyName: 'Test',
  category: 'I',
  uniqueID: 'Test',
  credits: 80,
  email: 'Test88@gg.com',
  action: 'Find a Match',
  status: 'I',
  type: 'Type-1',
};

const data: (typeof rowData)[] = [
  rowData,
  {
    id: '1',
    piboId: '1',
    companyName: 'Test1',
    category: 'II',
    uniqueID: 'Test',
    credits: 20,
    email: 'Test@g.com',
    action: 'Find a Match',
    status: 'R',
    type: 'Type-I',
  },
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
  rowData,
];

export const getPendingTableData = () => {
  if (getCookie('jwt')) {
    return { data };
  }
  return redirect('/login');
};

export const getPendingData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    if (params.id === '0') {
      return {
        id: '0',
        category: 'I',
        status: 'R',
        credits: 90,
      };
    }
    return {
      id: '1',
      category: 'II',
      status: 'X',
      credits: 30,
    };
  }
  return redirect('/login');
};

export const updatePendingStatus = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return null;
  } else return redirect('/login');
};

export const createMatch = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const formData = await request.formData();
  const id = [];
  for (const [name, value] of formData) {
    if (name === 'id') {
      id.push(value);
    }
  }
  console.log(id);
  const requestObject = Object.fromEntries(formData);
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return redirect('/pending');
  } else return redirect('/login');
};

// Maybe Move to Credits Service
export const createRequest = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const pibo = (await getPIBOData({ params })).data;
    if (!pibo) {
      throw new Error('No PIBO found');
    }
    return {
      category: pibo.category,
      status: 'R',
      credits: Array(pibo.category.length).fill(0),
    };
  }
  return redirect('/login');
};

export const upsertRequest = async ({
  params,
  request,
}: {
  params: any;
  request: any;
}) => {
  const requestObject = Object.fromEntries(await request.formData());
  if (getCookie('jwt')) {
    console.log(params.id, requestObject);
    return redirect('/pending');
  } else return redirect('/login');
};

export const getMatches = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const request = (await getPendingData({ params })) as any;
    if (!request) {
      throw new Error('No Request found');
    }
    console.log(request);
    const creditMatches = await getMatchForCategory(request.category);
    console.log(creditMatches);
    return {
      data: creditMatches,
    };
  }
  return redirect('/login');
};
