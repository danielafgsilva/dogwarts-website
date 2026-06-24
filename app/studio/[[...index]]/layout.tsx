// Server-component layout for the Studio route. Owns the metadata/viewport
// exports (display-cutout aware + noindex) so the client Studio page below
// doesn't have to — keeping `sanity.config` evaluation client-side only.
export { metadata, viewport } from 'next-sanity/studio'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
