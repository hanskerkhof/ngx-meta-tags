import { Inject, Injectable, Optional } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgxMetaTagsConfig } from './ngx-meta-tags.module';

export class MetaTag {
  name: string;
  value: string;
  isFacebook: boolean;

  constructor(name, value, isFacebook: boolean) {
    this.name = name;
    this.value = value;
    this.isFacebook = isFacebook;
  }
}

@Injectable({
  providedIn: 'root'
})
export class NgxMetaTagsService {
  private titlePrimaryMeta = 'title';
  private descriptionPrimaryMeta = 'description';
  private authorPrimaryMeta = 'author';

  private urlMeta = 'og:url';
  private typeMeta = 'og:type';
  private titleMeta = 'og:title';
  private descriptionMeta = 'og:description';
  private imageMeta = 'og:image';
  private secureImageMeta = 'og:image:secure_url';

  private twitterUrlMeta = 'twitter:url';
  private twitterTitleMeta = 'twitter:title';
  private twitterDescriptionMeta = 'twitter:description';
  private twitterImageMeta = 'twitter:image';

  constructor(@Inject('config') private config: any,
              private titleService: Title,
              private metaService: Meta,
  ) {
  }

  public setTitle(title): void {
    this.titleService.setTitle(title);
  }

  public setMetaFromConfig(config: NgxMetaTagsConfig): void {
    this.config = {...this.config, ...config};
    this.setDefaultMeta();
  }

  public setDefaultMeta(): void {
    this.setTitle(this.config.title);
    this.setPrimaryTags(
      '' + this.config.title,
      '' + this.config.description,
      `${this.config.author}`
    );
    this.setSocialMediaTags(
      `${this.config.url}`,
      'website',
      '' + this.config.title,
      '' + this.config.description,
      '' + this.config.image
    );
  }

  public setPrimaryTags(title, description, author): void {
    const tags = [
      new MetaTag(this.titlePrimaryMeta, title, false),
      new MetaTag(this.descriptionPrimaryMeta, description, false),
      new MetaTag(this.authorPrimaryMeta, author, false),
    ];
    this.setTags(tags);
  }

  public setSocialMediaTags(url, type = 'website', title, description, image): void {
    const imageUrl = `${image}`;
    const tags = [
      new MetaTag(this.urlMeta, url, true),
      new MetaTag(this.typeMeta, type, true),
      new MetaTag(this.titleMeta, title, true),
      new MetaTag(this.descriptionMeta, description, true),
      new MetaTag(this.imageMeta, imageUrl, true),
      new MetaTag(this.secureImageMeta, imageUrl, true),
      new MetaTag(this.twitterUrlMeta, url, false),
      new MetaTag(this.twitterTitleMeta, title, false),
      new MetaTag(this.twitterDescriptionMeta, description, false),
      new MetaTag(this.twitterImageMeta, imageUrl, false)
    ];
    this.setTags(tags);
  }

  private setTags(tags: MetaTag[]): void {
    tags.forEach(siteTag => {
      // if (siteTag.value !== '') {
      //   console.log(siteTag);
      if (siteTag.isFacebook) {
        this.metaService.updateTag({property: siteTag.name, content: siteTag.value});
      } else {
        this.metaService.updateTag({name: siteTag.name, content: siteTag.value});
      }
      // } else {
      //   console.log('no value', siteTag);
      // }
    });
  }
}
