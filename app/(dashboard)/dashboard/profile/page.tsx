import { Breadcrumbs } from '@/components/breadcrumbs';
import { ScrollArea } from '@/components/ui/scroll-area';
import UserCard from '@/components/forms/user-profile-form';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Profile', link: '/dashboard/profile' }
];
export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <UserCard
          name = 'John Doe'
          imageUrl='http://localhost:5000'
          role = 'admin'
          department='Executive'
        />
      </div>
    </ScrollArea>
  );
}
