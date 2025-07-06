import type { User } from '@/interfaces/User';
import { FAKE_USERS } from '@/mocks/userMocks';

export const fetchUsers = (): Promise<User[]> => {
    console.log('Fetching users...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(FAKE_USERS);
        }, 500);
    });
};

export const fetchUserById = (id: number): Promise<User | undefined> => {
    console.log(`Fetching user with ID: ${id}`);
    return new Promise(resolve => {
        setTimeout(() => {
            const user = FAKE_USERS.find(user => user.id === id);
            resolve(user);
        }, 300);
    });
};