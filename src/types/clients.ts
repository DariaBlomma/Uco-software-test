export interface Client {
  id: string,
  assignees: string[],
  channelName: string,
  createdAt: Date,
  email: string,
  fullName: string,
  tasksDone: number,
  tasksTotal: number,
  numberOfNotes: number,
  numberOfUnreadEmails: number,
  numberOfUnreadSmsMessages: number,
  numberOfUnreadWhatsappMessages: number,
  phone: string,
  status: ClientStatus,
  statusColor: string,
  tasksNextDatetime: Date,
}

type ClientStatus = 'Active' | 'Inactive';

export interface Assignee {
  id: string,
  image: string,
}
