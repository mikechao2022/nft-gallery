export enum Socials {
  Twitter = 'Twitter',
  Website = 'Website',
  Farcaster = 'Farcaster',
}

export default function useUserProfile() {
  const { params } = useRoute()

  const { profile, refetch: fetchProfile } = useFetchProfile(
    params?.id as string,
  )

  return {
    hasProfile: computed(() => !!profile.value),
    userProfile: profile,
    fetchProfile,
  }
}
