export type CategoryIType {
  id:    number;
  name:  string;
  emoji: string;
  cover: string;
  path:  string;
}

export type PhotoIType {
  id:         number;
  categoryId: number;
  src:        string;
  userId:     number;
  likes:      number;
}

export type UserIType {
  id:       string;
  password: string;
  favs:     string[];
  avatar:   string;
  email:    string;
}
