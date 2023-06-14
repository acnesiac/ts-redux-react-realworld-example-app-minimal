import { Err, Ok, Result } from '@hqoss/monads';
import axios from 'axios';
import { array, guard, object, string } from 'decoders';
import settings from '../config/settings';
import {
  Article,
  ArticleForEditor,
  ArticlesFilters,
  FeedFilters,
  MultipleArticles,
} from '../types/article';

axios.defaults.baseURL = settings.baseApiUrl;



export async function getTags(): Promise<{ tags: string[] }> {
  return guard(object({ tags: array(string) }))((await axios.get('tags')).data);
}
