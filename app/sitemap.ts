import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export const revalidate = 3600;

const baseUrl = 'https://www.smilevip.net';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Fetch all services
  const { data: services } = await supabase
    .from('services')
    .select('slug, created_at');

  const serviceRoutes: MetadataRoute.Sitemap = (services || []).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: service.created_at ? new Date(service.created_at) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Fetch all sub-services with parent service slug
  const { data: subServices } = await supabase
    .from('sub_services')
    .select('slug, created_at, services(slug)');

  const subServiceRoutes: MetadataRoute.Sitemap = [];

  if (subServices) {
    for (const sub of subServices) {
      const parentService = sub.services as unknown as { slug: string } | null;
      if (parentService && typeof parentService.slug === 'string') {
        subServiceRoutes.push({
          url: `${baseUrl}/services/${parentService.slug}/${sub.slug}`,
          lastModified: sub.created_at ? new Date(sub.created_at) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    }
  }

  return [...staticRoutes, ...serviceRoutes, ...subServiceRoutes];
}
