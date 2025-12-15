import { MENU_APPS } from "../constants/home.constants";

export function HomeApp() {
  return (
    <div>
      {MENU_APPS.map((app) => {
        return (
          <button>
            <a href={app.path}>{app.name}</a>
          </button>
        );
      })}
    </div>
  );
}
