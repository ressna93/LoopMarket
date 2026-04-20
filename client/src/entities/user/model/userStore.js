import { create } from 'zustand'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../../shared/api/firebase'

export const useUserStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  init: () => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      set({ user, loading: false })
    })
    return unsubscribe
  },

  login: async (email, password) => {
    set({ error: null })
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      const messages = {
        'auth/user-not-found': '존재하지 않는 계정입니다.',
        'auth/wrong-password': '비밀번호가 올바르지 않습니다.',
        'auth/invalid-email': '이메일 형식이 올바르지 않습니다.',
        'auth/invalid-credential': '이메일 또는 비밀번호가 올바르지 않습니다.',
      }
      set({ error: messages[e.code] || '로그인에 실패했습니다.' })
      throw e
    }
  },

  signup: async (email, password, name) => {
    set({ error: null })
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(user, { displayName: name })
      set({ user: { ...user, displayName: name } })
    } catch (e) {
      const messages = {
        'auth/email-already-in-use': '이미 사용 중인 이메일입니다.',
        'auth/weak-password': '비밀번호는 6자 이상이어야 합니다.',
        'auth/invalid-email': '이메일 형식이 올바르지 않습니다.',
      }
      set({ error: messages[e.code] || '회원가입에 실패했습니다.' })
      throw e
    }
  },

  logout: async () => {
    await signOut(auth)
    set({ user: null })
  },

  clearError: () => set({ error: null }),
}))
