import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

/**
 * Page for editing the user profile
 */
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss']
})
export class EditUserPage implements OnInit {
  private userData;

  userId;
  firstName;
  lastName;
  userName;
  languages;
  allLanguages = [
    { code: 'de', name: 'German' },
    { code: 'en', name: 'English' },
    { code: 'ab', name: 'Abkhazian' },
    { code: 'aa', name: 'Afar' },
    { code: 'af', name: 'Afrikaans' },
    { code: 'ak', name: 'Akan' },
    { code: 'sq', name: 'Albanian' },
    { code: 'am', name: 'Amharic' },
    { code: 'ar', name: 'Arabic' },
    { code: 'an', name: 'Aragonese' },
    { code: 'hy', name: 'Armenian' },
    { code: 'as', name: 'Assamese' },
    { code: 'av', name: 'Avaric' },
    { code: 'ae', name: 'Avestan' },
    { code: 'ay', name: 'Aymara' },
    { code: 'az', name: 'Azerbaijani' },
    { code: 'bm', name: 'Bambara' },
    { code: 'ba', name: 'Bashkir' },
    { code: 'eu', name: 'Basque' },
    { code: 'be', name: 'Belarusian' },
    { code: 'bn', name: 'Bengali' },
    { code: 'bh', name: 'Bihari languages' },
    { code: 'bi', name: 'Bislama' },
    { code: 'bs', name: 'Bosnian' },
    { code: 'br', name: 'Breton' },
    { code: 'bg', name: 'Bulgarian' },
    { code: 'my', name: 'Burmese' },
    { code: 'ca', name: 'Catalan, Valencian' },
    { code: 'km', name: 'Central Khmer' },
    { code: 'ch', name: 'Chamorro' },
    { code: 'ce', name: 'Chechen' },
    { code: 'ny', name: 'Chichewa, Chewa, Nyanja' },
    { code: 'zh', name: 'Chinese' },
    { code: 'cu', name: 'Church Slavonic, Old Bulgarian, Old Church Slavonic' },
    { code: 'cv', name: 'Chuvash' },
    { code: 'kw', name: 'Cornish' },
    { code: 'co', name: 'Corsican' },
    { code: 'cr', name: 'Cree' },
    { code: 'hr', name: 'Croatian' },
    { code: 'cs', name: 'Czech' },
    { code: 'da', name: 'Danish' },
    { code: 'dv', name: 'Divehi, Dhivehi, Maldivian' },
    { code: 'nl', name: 'Dutch, Flemish' },
    { code: 'dz', name: 'Dzongkha' },
    { code: 'eo', name: 'Esperanto' },
    { code: 'et', name: 'Estonian' },
    { code: 'ee', name: 'Ewe' },
    { code: 'fo', name: 'Faroese' },
    { code: 'fj', name: 'Fijian' },
    { code: 'fi', name: 'Finnish' },
    { code: 'fr', name: 'French' },
    { code: 'ff', name: 'Fulah' },
    { code: 'gd', name: 'Gaelic, Scottish Gaelic' },
    { code: 'gl', name: 'Galician' },
    { code: 'lg', name: 'Ganda' },
    { code: 'ka', name: 'Georgian' },
    { code: 'ki', name: 'Gikuyu, Kikuyu' },
    { code: 'el', name: 'Greek (Modern)' },
    { code: 'kl', name: 'Greenlandic, Kalaallisut' },
    { code: 'gn', name: 'Guarani' },
    { code: 'gu', name: 'Gujarati' },
    { code: 'ht', name: 'Haitian, Haitian Creole' },
    { code: 'ha', name: 'Hausa' },
    { code: 'he', name: 'Hebrew' },
    { code: 'hz', name: 'Herero' },
    { code: 'hi', name: 'Hindi' },
    { code: 'ho', name: 'Hiri Motu' },
    { code: 'hu', name: 'Hungarian' },
    { code: 'is', name: 'Icelandic' },
    { code: 'io', name: 'Ido' },
    { code: 'ig', name: 'Igbo' },
    { code: 'id', name: 'Indonesian' },
    { code: 'ia', name: 'Interlingua (International Auxiliary Language Association)' },
    { code: 'ie', name: 'Interlingue' },
    { code: 'iu', name: 'Inuktitut' },
    { code: 'ik', name: 'Inupiaq' },
    { code: 'ga', name: 'Irish' },
    { code: 'it', name: 'Italian' },
    { code: 'ja', name: 'Japanese' },
    { code: 'jv', name: 'Javanese' },
    { code: 'kn', name: 'Kannada' },
    { code: 'kr', name: 'Kanuri' },
    { code: 'ks', name: 'Kashmiri' },
    { code: 'kk', name: 'Kazakh' },
    { code: 'rw', name: 'Kinyarwanda' },
    { code: 'kv', name: 'Komi' },
    { code: 'kg', name: 'Kongo' },
    { code: 'ko', name: 'Korean' },
    { code: 'kj', name: 'Kwanyama, Kuanyama' },
    { code: 'ku', name: 'Kurdish' },
    { code: 'ky', name: 'Kyrgyz' },
    { code: 'lo', name: 'Lao' },
    { code: 'la', name: 'Latin' },
    { code: 'lv', name: 'Latvian' },
    { code: 'lb', name: 'Letzeburgesch, Luxembourgish' },
    { code: 'li', name: 'Limburgish, Limburgan, Limburger' },
    { code: 'ln', name: 'Lingala' },
    { code: 'lt', name: 'Lithuanian' },
    { code: 'lu', name: 'Luba-Katanga' },
    { code: 'mk', name: 'Macedonian' },
    { code: 'mg', name: 'Malagasy' },
    { code: 'ms', name: 'Malay' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'mt', name: 'Maltese' },
    { code: 'gv', name: 'Manx' },
    { code: 'mi', name: 'Maori' },
    { code: 'mr', name: 'Marathi' },
    { code: 'mh', name: 'Marshallese' },
    { code: 'ro', name: 'Moldovan, Moldavian, Romanian' },
    { code: 'mn', name: 'Mongolian' },
    { code: 'na', name: 'Nauru' },
    { code: 'nv', name: 'Navajo, Navaho' },
    { code: 'nd', name: 'Northern Ndebele' },
    { code: 'ng', name: 'Ndonga' },
    { code: 'ne', name: 'Nepali' },
    { code: 'se', name: 'Northern Sami' },
    { code: 'no', name: 'Norwegian' },
    { code: 'nb', name: 'Norwegian Bokmål' },
    { code: 'nn', name: 'Norwegian Nynorsk' },
    { code: 'ii', name: 'Nuosu, Sichuan Yi' },
    { code: 'oc', name: 'Occitan (post 1500)' },
    { code: 'oj', name: 'Ojibwa' },
    { code: 'or', name: 'Oriya' },
    { code: 'om', name: 'Oromo' },
    { code: 'os', name: 'Ossetian, Ossetic' },
    { code: 'pi', name: 'Pali' },
    { code: 'pa', name: 'Panjabi, Punjabi' },
    { code: 'ps', name: 'Pashto, Pushto' },
    { code: 'fa', name: 'Persian' },
    { code: 'pl', name: 'Polish' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'qu', name: 'Quechua' },
    { code: 'rm', name: 'Romansh' },
    { code: 'rn', name: 'Rundi' },
    { code: 'ru', name: 'Russian' },
    { code: 'sm', name: 'Samoan' },
    { code: 'sg', name: 'Sango' },
    { code: 'sa', name: 'Sanskrit' },
    { code: 'sc', name: 'Sardinian' },
    { code: 'sr', name: 'Serbian' },
    { code: 'sn', name: 'Shona' },
    { code: 'sd', name: 'Sindhi' },
    { code: 'si', name: 'Sinhala, Sinhalese' },
    { code: 'sk', name: 'Slovak' },
    { code: 'sl', name: 'Slovenian' },
    { code: 'so', name: 'Somali' },
    { code: 'st', name: 'Sotho, Southern' },
    { code: 'nr', name: 'South Ndebele' },
    { code: 'es', name: 'Spanish, Castilian' },
    { code: 'su', name: 'Sundanese' },
    { code: 'sw', name: 'Swahili' },
    { code: 'ss', name: 'Swati' },
    { code: 'sv', name: 'Swedish' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'ty', name: 'Tahitian' },
    { code: 'tg', name: 'Tajik' },
    { code: 'ta', name: 'Tamil' },
    { code: 'tt', name: 'Tatar' },
    { code: 'te', name: 'Telugu' },
    { code: 'th', name: 'Thai' },
    { code: 'bo', name: 'Tibetan' },
    { code: 'ti', name: 'Tigrinya' },
    { code: 'to', name: 'Tonga (Tonga Islands)' },
    { code: 'ts', name: 'Tsonga' },
    { code: 'tn', name: 'Tswana' },
    { code: 'tr', name: 'Turkish' },
    { code: 'tk', name: 'Turkmen' },
    { code: 'tw', name: 'Twi' },
    { code: 'ug', name: 'Uighur, Uyghur' },
    { code: 'uk', name: 'Ukrainian' },
    { code: 'ur', name: 'Urdu' },
    { code: 'uz', name: 'Uzbek' },
    { code: 've', name: 'Venda' },
    { code: 'vi', name: 'Vietnamese' },
    { code: 'vo', name: 'Volap_k' },
    { code: 'wa', name: 'Walloon' },
    { code: 'cy', name: 'Welsh' },
    { code: 'fy', name: 'Western Frisian' },
    { code: 'wo', name: 'Wolof' },
    { code: 'xh', name: 'Xhosa' },
    { code: 'yi', name: 'Yiddish' },
    { code: 'yo', name: 'Yoruba' },
    { code: 'za', name: 'Zhuang, Chuang' },
    { code: 'zu', name: 'Zulu' }
  ];
  description;
  displayUrl;
  oldPhotoUrl;
  beforeUrl;
  uploadStatus = false;
  photoUploads = [];

  constructor(
    private userDataService: UserDataService,
    public alertService: AlertService,
    private router: Router,
    private photoService: PhotoService
  ) {
    this.userData = this.userDataService.getCurrentUser();
    this.userData = this.userData.__zone_symbol__value;
    this.allLanguages;

    if (this.userData.id) {
      this.firstName = this.userData.firstName;
    } else {
      this.firstName = '';
    }
    if (this.userData.firstName) {
      this.firstName = this.userData.firstName;
    } else {
      this.firstName = '';
    }
    if (this.userData.lastName) {
      this.lastName = this.userData.lastName;
    } else {
      this.lastName = '';
    }

    if (this.userData.userName) {
      this.userName = this.userData.userName;
    } else {
      this.userName = '';
    }

    if (this.userData.languages) {
      this.languages = this.userData.languages;
    } else {
      this.languages = '';
    }

    if (this.userData.description) {
      this.description = this.userData.description;
    } else {
      this.description = '';
    }

    if (this.userData.photoUrl) {
      this.displayUrl = this.userData.photoUrl;
    } else {
      this.displayUrl = 'https://cdn.picpng.com/head/head-the-dummy-avatar-man-tie-72756.png';
    }

    this.oldPhotoUrl = this.displayUrl;
  }

  ngOnInit() {
    this.getUserId();
    //TODO: maybe get userdata from firestore and subscribe
    //this.db.doc(`user/${id}`).valueChanges().subscribe(user => this.user = user);
  }

  async getUserId() {
    this.userId = await this.userDataService.getCurrentUserID();
  }

  /**
   * Let the user upload an avatar, and updates the avatar
   * @param event
   */
  uploadAvatar(event) {
    if (this.oldPhotoUrl != this.displayUrl) {
      this.beforeUrl = this.displayUrl;
    }
    this.uploadStatus = true;
    this.photoService.storePhoto(event.target.files[0], 'avatars/').then(
      (res: any) => {
        if (res) {
          this.uploadStatus = false;
          this.photoUploads.unshift(res);
          this.displayUrl = this.photoService.photoID;

          if (this.beforeUrl) {
            this.deleteAvatar(this.beforeUrl);
          }
        }
      },
      (error: any) => {
        this.uploadStatus = false;
        console.log(error);
        this.alertService.basicAlert('Fehler aufgetreten', 'Bitte versuchen Sie es erneut', ['OK']);
      }
    );
  }

  /**
   * Deletes the photo in firestore storage with the given url
   * @param {string} url
   */
  deleteAvatar(url: string) {
    this.photoService.deletePhoto(url, 'avatars/');
  }

  /**
   * Closes the editing page without saving the changes and deletes uploaded photos which are not used
   */
  close() {
    if (this.userData.userName.length === 0) {
      this.alertService.basicAlert(
        'Sie müssen einen Benutzernamen angeben',
        'Bitte setzen sie einen Benutzernamen',
        ['OK']
      );
      return;
    }
    // delete photo which is not in use
    if (this.oldPhotoUrl != this.displayUrl) {
      const tmp = this.displayUrl;
      this.displayUrl = this.oldPhotoUrl;
      this.deleteAvatar(tmp);
    }

    this.router.navigate(['profile', this.userId]);
  }

  /**
   * Updates the user data in firestore
   */
  updateUser() {
    if (this.userName.length === 0) {
      this.alertService.basicAlert(
        'Sie müssen einen Benutzernamen angeben',
        'Bitte setzen sie einen Benutzernamen',
        ['OK']
      );
      return;
    }
    if (this.oldPhotoUrl != this.displayUrl) {
      this.deleteAvatar(this.oldPhotoUrl);
    }
    let data = {
      firstName: this.firstName,
      lastName: this.lastName,
      userName: this.userName,
      languages: this.languages,
      description: this.description,
      photoUrl: this.displayUrl
    };
    this.router.navigate(['profile', this.userId]);
    this.userDataService.updateCurrentUser(data);
  }
}
