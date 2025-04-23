import { NavLink } from "@/types/navLinks";

import { icons } from '@/constants/image';

export const navLinks: NavLink[] = [
  { icon: icons.dashboard, label: 'Dashboard', link: 'dashboard' },
  { icon: icons.content, label: 'Content', link: 'content' },
  { icon: icons.user, label: 'User', link: 'user' },
  { icon: icons.task, label: 'Task', link: 'task' },
  { icon: icons.device, label: 'App/Web', link: 'app/web' },
  { icon: icons.analytics, label: 'Analytics', link: 'analytics' },
  { icon: icons.media, label: 'Media', link: 'media' },
  { icon: icons.customize, label: 'Customize', link: 'customize' },
  { icon: icons.notification, label: 'Notification', link: 'notification' },
  { icon: icons.subscription, label: 'Subscription', link: 'subscription' },
  { icon: icons.settings, label: 'Settings', link: 'settings' },
];
