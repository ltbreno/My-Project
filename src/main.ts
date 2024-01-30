import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


window.onload = () => {
  if (localStorage['theme'] === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  const checkbox = document.querySelector('input[type="checkbox"]') as HTMLInputElement;
  const clickSound = new Audio('./assets/click1.mp3');

  checkbox.addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
      if (event.target.checked) {
        document.documentElement.classList.add("dark");
        localStorage['theme'] = "dark";
        clickSound.play()
      } else {
        document.documentElement.classList.remove("dark");
        localStorage['theme'] = "light";
        clickSound.play()
      }
    }
  });
};





bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
