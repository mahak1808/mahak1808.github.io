import Icon from "./Icon";

export default function StoreLinks({
  appStoreUrl,
  playStoreUrl,
  className = "",
}: {
  appStoreUrl?: string;
  playStoreUrl?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {appStoreUrl ? (
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-on-surface text-surface font-body text-xs font-semibold hover:scale-[1.03] active:scale-95 transition-transform"
        >
          <Icon name="phone_iphone" size={16} />
          App Store
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-on-surface/10 text-on-surface/50 font-body text-xs font-semibold cursor-not-allowed">
          <Icon name="phone_iphone" size={16} />
          App Store soon
        </span>
      )}

      {playStoreUrl ? (
        <a
          href={playStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-on-surface text-surface font-body text-xs font-semibold hover:scale-[1.03] active:scale-95 transition-transform"
        >
          <Icon name="android" size={16} />
          Google Play
        </a>
      ) : (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-on-surface/10 text-on-surface/50 font-body text-xs font-semibold cursor-not-allowed">
          <Icon name="android" size={16} />
          Google Play soon
        </span>
      )}
    </div>
  );
}
