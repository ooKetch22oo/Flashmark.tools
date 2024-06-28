import { $, component$, useSignal } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';
import { supabase } from '~/supabase';

export const LogoutButton = component$(() => {
  const nav = useNavigate();
  const isLoading = useSignal(false);

  const handleLogout = $(async () => {
    try {
      isLoading.value = true;
      await supabase.auth.signOut();
      nav('/auth/login');
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      isLoading.value = false;
    }
  });

  return (
    <button 
      onClick$={handleLogout} 
      disabled={isLoading.value}
      class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
    >
      {isLoading.value ? 'Logging out...' : 'Logout'}
    </button>
  );
});