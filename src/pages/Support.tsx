export default function Legal({ title, content }: { title: string, content: string }) {
  return (
    <div className="pt-24 min-h-screen bg-[#fdfdfc]">
      <div className="lux-container py-24 max-w-3xl">
        <h1 className="text-4xl font-serif mb-16">{title}</h1>
        <div className="prose prose-sm font-light text-black/70 leading-relaxed space-y-12 whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
}

export const SHIPPING_CONTENT = `
Shipping & Returns

We treat every shipment like a museum transit.

GLOBAL DELIVERY
We ship worldwide using insured, white-glove carriers. All artworks are crated in bespoke, museum-grade packaging to ensure absolute safety.

TIMELINE
Please allow 7-14 business days for inspection and crating before dispatch. Transit times vary by location.

RETURNS
Due to the limited and fragile nature of our collection, we do not accept returns. However, in the rare event of damage during transit, please contact us within 24 hours of delivery with photographic evidence for a full insurance claim and replacement/refund.
`;

export const SUSTAINABILITY_CONTENT = `
Sustainability Commitment

Art that respects its origins.

MATERIALS
We prioritize artists who use natural pigments, sustainably sourced wood frames, and acid-free archival papers.

PACKAGING
90% of our shipping materials are recyclable and biodegradable. We use concentrated padding to minimize volume and reduce carbon footprints.

LONGEVITY
The most sustainable practice is buying pieces that last forever. We reject "fast art." Maison Lune is built for generations.
`;

export const PRIVACY_CONTENT = `
Privacy Policy

Your space is private, and so is your data.

DATA COLLECTION
We only collect information necessary to fulfill your order and provide an exceptional experience. This includes basic contact and shipping details.

NO THIRD PARTIES
We never sell or share your data with third-party marketplaces. Your relationship is strictly with Maison Lune Studio.

SECURITY
Your financial information is never stored on our servers. All transactions are handled via encrypted gateways.
`;
