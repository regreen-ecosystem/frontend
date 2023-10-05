import { getCookie } from 'typescript-cookie';
import { redirect } from 'react-router-dom';
import { getPWPData } from '../pwp';

const data = [
  {
    id: 0,
    category: 'I',
    credit: 80,
    type: 'Type-1',
    companyName: 'Test1',
    email: 'testMail1',
  },
  {
    id: 1,
    category: 'II',
    credit: 30,
    type: 'Type-1',
    companyName: 'Test2',
    email: 'testMail2',
  },
  {
    id: 2,
    category: 'III',
    credit: 20,
    type: 'Type-1',
    companyName: 'Test3',
    email: 'testMail3',
  },
  {
    id: 3,
    category: 'IV',
    credit: 10,
    type: 'Type-1',
    companyName: 'Test4',
    email: 'testMail4',
  },
  {
    id: 4,
    category: 'I',
    credit: 50,
    type: 'Type-1',
    companyName: 'Test5',
    email: 'testMail5',
  },
];

export const getCreditTableData = async () => {
  if (getCookie('jwt')) return { data: data };
  return redirect('/login');
};

export const getCreditData = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const ind = Number(params.id);
    return { data: data[ind] };
  }
  return redirect('/login');
};

export const createCredit = async ({ params }: { params: any }) => {
  if (getCookie('jwt')) {
    const pwp = await getPWPData({ params });
    if (!pwp) {
      throw new Error('No PIBO found');
    }
    const categories = pwp.data.details.platic_type.split(',');
    return {
      category: categories,
      credits: Array(categories.length).fill(0),
    };
  }
  return redirect('/login');
};

export const upsertCredit = async ({
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

export const getMatchForCategory = async (category: string) => {
  if (getCookie('jwt')) {
    return data.filter((row) => row.category === category);
  }
  return redirect('/login');
};
