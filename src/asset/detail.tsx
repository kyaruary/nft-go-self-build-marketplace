import { Activity } from './activity';
import { Attributes } from './attributes';
import { Information } from './information';
import { Introduction } from './introduction';
import { AssetPageLayout } from './layout';
import { Listings } from './listings';
import { Offers } from './offers';
import { TokenPreview } from './token-preview';

export function AssetDetailPage() {
  return (
    <AssetPageLayout
      view={<TokenPreview />}
      attributes={<Attributes />}
      introduction={<Introduction />}
      information={<Information />}
      listings={<Listings />}
      offers={<Offers />}
      activity={<Activity />}
      hasAttributes
    />
  );
}
