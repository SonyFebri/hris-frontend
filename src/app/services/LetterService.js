import api from '@/lib/axios';

export const getAllIncomingLetter = async () => {
  const response =await api.get('/api/letters')
  return response.data;
};

export const responseApproval = async (id, newStatus) => {
  const res = await api.post('api/letters/approval', { id, newStatus });
  return res.data;
};
