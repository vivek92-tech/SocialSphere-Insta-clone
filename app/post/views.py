from rest_framework import authentication, permissions, \
    viewsets, generics, status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import PostSerializer, CommentSerializer, AuthorSerializer
from core.models import Post, Comment
from .permissions import IsOwnerOrReadOnly, IsOwnerOrPostOwnerOrReadOnly
from core.pagination import FollowersLikersPagination


class PostViewSet(viewsets.ModelViewSet):
    """Post a new post if authenticated or read only"""
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (
        IsOwnerOrReadOnly, permissions.IsAuthenticatedOrReadOnly)

    def perform_create(self, serializer):
        """Create a new object"""
        serializer.save(author=self.request.user)


class AddCommentView(generics.CreateAPIView):
    """Add a new comment and edit or delete existing"""
    serializer_class = CommentSerializer
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)

    def post(self, request, post_id=None):
        post = Post.objects.get(pk=post_id)
        serializer = CommentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(post=post, author=self.request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(
                serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ManageCommentView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CommentSerializer
    lookup_url_kwarg = 'comment_id'
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (IsOwnerOrPostOwnerOrReadOnly,)

    def get_queryset(self):
        queryset = Comment.objects.all()
        return queryset


class LikeView(APIView):
    """Toggle like"""
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None, post_id=None):
        post = Post.objects.get(pk=post_id)
        user = self.request.user
        if user.is_authenticated:
            if user in post.likes.all():
                like = False
                post.likes.remove(user)
            else:
                like = True
                post.likes.add(user)
        data = {
            'like': like
        }
        return Response(data)


class GetLikersView(generics.ListAPIView):
    serializer_class = AuthorSerializer
    pagination_class = FollowersLikersPagination

    def get_queryset(self):
        post_id = self.kwargs['post_id']
        queryset = Post.objects.get(
            pk=post_id).likes.all()
        return queryset


class UserFeedView(generics.ListAPIView):
    authentication_classes = (authentication.TokenAuthentication,)
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.request.user
        following_users = user.following.all()
        queryset = Post.objects.all().filter(author__in=following_users)
        return queryset